async function validateId(model, id) {

    try {
        const data = await model.findById(id);
        return !(data === null);
    } catch (error) {
        console.log(`Something went wrong with validating id for model ${model}`);
        return false;
    }
}

module.exports = {
    validateId,
}