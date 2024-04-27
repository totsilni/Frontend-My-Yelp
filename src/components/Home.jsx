import React, { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { database } from "../firebase/config";
import logo from "../assets/yelp-logo.png";
import { Button, Input } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { onValue, push, ref } from "firebase/database";

const Home = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const submitRestaurant = () => {
    if (title != "" && (city != "") & (desc != "")) {
      if (user) {
        const userId = user.uid;
        const restaurantData = {
          title,
          description: desc,
          city,
        };

        const restaurantsRef = ref(database, `users/${userId}/restaurants`);
        push(restaurantsRef, restaurantData)
          .then(() => {
            setTitle("");
            setDesc("");
            setCity("");
            console.log("Restaurant added successfully!");
          })
          .catch((error) => {
            console.error("Error adding restaurant:", error.message);
          });
      }
    }
  };

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const restaurantsRef = ref(database, `users/${userId}/restaurants`);

      onValue(restaurantsRef, (snapshot) => {
        const restaurantsData = [];
        snapshot.forEach((childSnapshot) => {
          restaurantsData.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        setRestaurants(restaurantsData);
      });
    }
  }, [user]);

  console.log(restaurants);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <div className="">
      <header className="flex justify-between pl-20 pr-20 align-middle bg-orange-400 p-6">
        <img
          src={logo}
          style={{ width: "150px", marginTop: "-35px" }}
          alt="Yelp Logo"
        />
        {user && (
          <div className="flex flex-row align-middle gap-3">
            <h1 className="text-4xl font-bold pt-3">{user.displayName}</h1>
            <Button color="black" variant="gradient" onClick={logOut}>
              Logout
            </Button>
          </div>
        )}
      </header>
      <div className="body p-20 pt-1 flex flex-col justify-evenly">
        <div className="bg-blue-gray-400  p-10 h-1/4 flex flex-col gap-10 rounded-2xl">
          <h1 className="text-center text-3xl">Add Restaurant</h1>
          <form
            onSubmit={submitRestaurant}
            className="flex flex-row justify-evenly pl-10 pr-10"
          >
            <div>
              <Input
                label="Name"
                color="black"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                label="Description"
                color="black"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                label="City"
                color="black"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <Button onClick={submitRestaurant}>Add New</Button>
          </form>
        </div>
        <div className="max-h-full overflow-y-auto">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="w-1/3 px-4 py-2">Name</th>
                <th className="w-1/3 px-4 py-2">Description</th>
                <th className="w-1/3 px-4 py-2">City</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="h-20">
                  <td className="border px-4 py-2">{restaurant.title}</td>
                  <td className="border px-4 py-2">{restaurant.description}</td>
                  <td className="border px-4 py-2">{restaurant.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
