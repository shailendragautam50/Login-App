// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    city:{ type: String, required: true },
    mobileNumber:{ type: Number, required: true },
    password: { type: String, required: true },
    confirmpassword:{ type: String, required: true },
    
  });
  
  const User = mongoose.model('User', userSchema);
  