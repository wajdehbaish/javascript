const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });

const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};
async function run() {
    const idsarr = await getIDs()
    console.log(idsarr);

    const rescipe = await getRecipe(idsarr[2])
    console.log(rescipe);
}

run()