import mongoose from 'mongoose';
import { app } from './app';

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://Hamim:Hamim742@cluster0.bls3tyg.mongodb.net/ShopSphereDB?retryWrites=true&w=majority&appName=Cluster0'
    );

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main()