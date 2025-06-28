import mongoose from 'mongoose';
import { app } from './app';

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await mongoose.connect(`${process.env.MONGOOSE_URI}`);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
