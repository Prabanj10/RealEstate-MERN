import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type:String,
      default:"https://imgs.search.brave.com/FWGVp1vQr9EbONcHMuxajbVqoRbscBT4dPEQYcaAy4s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGV1/YmVudmlsbGVjb25m/ZXJlbmNlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MTIvUHJvZmlsZVBo/b3RvX1BILmpwZw"
    },
  },
  { timestamps: true }
); // This will automatically add timestamps for any operations done.

const User = mongoose.model('User', userSchema);

export default User;
