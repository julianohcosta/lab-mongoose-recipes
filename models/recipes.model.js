import mongoose, { Schema } from 'mongoose'

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        level: {
            type: String,
            enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
        },
        ingredients: [ String ],
        cuisine: {
            type: String,
            required: true
        },
        dishType: {
            type: String
        },
        image: {
            type: String,
            default: "https://images.media-allrecipes.com/images/75131.jpg"
        },
        duration: {
            type: Number,
            min: 0
        },
        creator: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe