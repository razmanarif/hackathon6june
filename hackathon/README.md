![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Johor_Bahru_skyline_at_night.jpg/800px-Johor_Bahru_skyline_at_night.jpg)

#### Prompt

You are part of the elite team of developers assigned by the King to develop a web app for the Johor Bahru City in Malaysia. The city has a large population of senior citizens who are unable to go to the store and compete with younger citizens during panic shopping to stock up on groceries during the curfew. Your task is to develop a web app that facilitates the process of connecting seniors with registered youth who can run errands for them. The web app should be able to:

### Task 1:

Allow `seniors` to register with their contact details, including name, address, age, email, profile photo and phone number. Seniors should be able to create a list of required items with an expected delivery date. Each item in the list should have a name, quantity, and status (0 - free, 1 - inProgress, 2 - fulfilled).

<details>
    <summary>Help Information</summary>
     ```javascript

     // you can store status of order can be stored using an enum
     const testSchema = new mongoose.Schema({
        status: {
            type: String,
            enum: ['free', 'inProgress', 'fulfilled']
        }
     })
     ```

</details>

### Task 2:

Enable `helpers` to register with their contact details, including name, address, age, email, profile photo and phone number. Helpers should be able to view all lists with a status of `free` (i.e., lists that haven't been assigned to any helper yet).

### Task 3:

Helpers should have the ability to view unfulfilled lists, which include lists that are still pending or in progress. Additionally, helpers should be able to see the lists they are currently fulfilling or have already fulfilled on their profile page.

Design and implement the web app with an intuitive user interface, ensuring that seniors can easily register, create lists, and track their requests, while helpers can easily register, view `free` lists, and track their assigned and completed tasks. Remember to prioritize user privacy and data protection when designing the app.

### Hints

### Information for users

---

```javascript
{
    firstname: "",
    lastname:"",
    dateOfBirth: "",
    phoneNumber:"",
    address: {
        houseNumber: 0,
        street: "",
        city : "",
        district: ""
    },
    lists:[]
    userType: "senior" //"senior" || "helper"
}
```

### List information

---

```javascript
{
  lists: [
    {
      items: [
        {
          item: "",
          quantity: 0,
        },
      ],
      deliveryDate: "",
      status: "free", //"free", "inProgress", "fulfilled"
    },
  ];
}
```

### Getting Started

- Create a `.env` file and add the `PORT`, `SESSION SECRET` and `MONGO URI`
- Run `npm install` \*\*note some packages maybe missing and you may need to install them check all `require`
- Fix all errors and ensure the app runs before continuing to build the code.

May the best team win!!!
