import express from 'express';
import Recipe from "../models/recipes.model";
import data from '../data.json'

const router = express.Router()

router.post('/create', async (request, response) => {
    try {
        const newRecipe = await Recipe.create(request.body)
        return response.json(newRecipe)
    } catch (error) {
        console.log(error)
        return response.status(500).json({msg: 'Sorry, something is wrong. Try again later!'})
    }
})

router.post('/insert', async (request, response) => {
    try {
        const insertRecipes = await Recipe.insertMany(data)
        return response.json(insertRecipes)
    } catch (error) {
        console.log(error)
        return response.status(500).json({msg: 'Sorry, something is wrong. Try again later!'})
    }
})

router.put('/edit/:id', async (request, response) => {
    try {
        const {id} = request.params

        const update = await Recipe.findByIdAndUpdate(id, {...request.body}, {new: true, runValidators: true})

        return response.status(200).json(update)
    } catch (error) {
        console.log(error)

        return response.status(500).json({msg: 'Sorry, something is wrong. Try again later!'})
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        const {id} = request.params

        const deleteRecipe = await Recipe.findByIdAndDelete(id)

        return response.status(200).json(deleteRecipe)
    } catch (error) {
        console.log(error)

        return response.status(500).json({msg: 'Sorry, something is wrong. Try again later!'})
    }
})

export default router

