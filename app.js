class App 
{
    runApplication()
    {
        const navigation = document.getElementById("navigation");
        navigation.addEventListener("click", this.myclick);
        console.log("Hallo")
    }

    
}

let app = new App();
app.runApplication();