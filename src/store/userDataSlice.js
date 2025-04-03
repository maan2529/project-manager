
import { createSlice } from '@reduxjs/toolkit';

const userDataArr = [
  {
    id: 1,
    name: "Aarav Mehta",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Software Engineer, specializing in AI & ML.",
    contact: "aarav.mehta@example.com",
    location: "Mumbai, India",
    address: "Bandra, Mumbai, Maharashtra",
    lat: 19.0556,
    lng: 72.8295,
    interests: ["Artificial Intelligence", "Robotics"],
    phone: "+91-1122334455",
    join: "Jan 2021"

  },
  {
    id: 2,
    name: "Riya Sharma",
    photo: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Full-stack Developer, passionate about UI/UX.",
    contact: "riya.sharma@example.com",
    location: "Bangalore, India",
    address: "Koramangala, Bangalore, Karnataka",
    lat: 12.9352,
    lng: 77.6245,
    interests: ["Web Development", "Graphic Design"],
    phone: "+91-1122334455",
    join: "Oct 2022"
  },
  {
    id: 3,
    name: "Kabir Verma",
    photo: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Data Scientist , working with Big Data and Analytics.",
    contact: "kabir.verma@example.com",
    location: "Delhi, India",
    address: "Connaught Place, New Delhi",
    lat: 28.6315,
    lng: 77.2167,
    interests: ["Machine Learning", "Data Visualization"],
    phone: "+91-1122334455",
    join: "March 2021"
  },
  {
    id: 4,
    name: "Ananya Nair",
    photo: "https://media.istockphoto.com/id/2115141901/photo/cheerful-middle-eastern-lady-with-smartphone-texting-over-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=tMwqwdsfhTHQuM6t5VRWNxuZkrHPB4osd2SBLCVwgQA=",
    description: "Mobile App Developer, React Native enthusiast.",
    contact: "ananya.nair@example.com",
    location: "Pune, India",
    address: "Kothrud, Pune, Maharashtra",
    lat: 18.5060,
    lng: 73.8079,
    interests: ["App Development", "Cybersecurity"],
    phone: "+91-1122334455",
    join: "March 2021"
  },
  {
    id: 5,
    name: "Vikram Singh",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Blockchain Developer, with expertise in smart contracts.",
    contact: "vikram.singh@example.com",
    location: "Hyderabad, India",
    address: "Hitech City, Hyderabad, Telangana",
    lat: 17.4504,
    lng: 78.3802,
    interests: ["Blockchain", "Cryptography"],
    phone: "+91-1122334455",
    join: "March 2021"
  },
  {
    id: 6,
    name: "Megha Patel",
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Cloud Engineer, specializing in AWS & Azure.",
    contact: "megha.patel@example.com",
    location: "Ahmedabad, India",
    address: "Navrangpura, Ahmedabad, Gujarat",
    lat: 23.0339,
    lng: 72.5463,
    interests: ["Cloud Computing", "DevOps"],
    phone: "+91-1122334455",
    join: "March 2021"
  },
  {
    id: 7,
    name: "Rohan Das",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "Cybersecurity Analyst, focusing on penetration testing.",
    contact: "rohan.das@example.com",
    location: "Chennai, India",
    address: "T. Nagar, Chennai, Tamil Nadu",
    lat: 13.0405,
    lng: 80.2337,
    interests: ["Ethical Hacking", "Network Security"],
    phone: "+91-1122334455",
    join: "March 2021"
  },

];


const initialState = {
  data: userDataArr,
};
// Create slice
const userDataSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    deleteUserData: (state, action) => {
      const updatedData = state.data.filter((user, index) =>
        index !== action.payload
      );

      state.data = updatedData;
      // localStorage.setItem("userData", JSON.stringify(state.data));
    },
   

    addUserData: (state, action) => {
      
      state.data = [...state.data, action.payload];
      // state.data = updatedData;
      console.log(state.data)
      console.log(state)
      

      console.log('data added')
      // localStorage.setItem("userData", JSON.stringify(state.data));
    },
  },
});

export const { deleteUserData, addUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
