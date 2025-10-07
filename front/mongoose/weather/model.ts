import mongoose, { model } from "mongoose";
import { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schemas";

export default mongoose.models.Weather || 
model<WeatherInterface>("Weather", WeatherSchema);