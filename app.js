class App 
{
    runApplication()
    {
        const navigation = document.getElementById("navigation");
        navigation.addEventListener("click", this.myclick);
    }

    myclick()
    {
        const navigation = document.getElementById("navigation")
        navigation.style.backgroundColor = "#306095";
        console.log("Hello World")
    }
}

let app = new App();
app.runApplication();