async function analyzeCoffee() {
    const input = document.getElementById("imageInput");
    const result = document.getElementById("result");

    if (!input.files.length) {
        alert("Please upload a coffee image.");
        return;
    }

    const formData = new FormData();
    formData.append("image", input.files[0]);

    result.innerText = "Analyzing...";

    try {
        const response = await fetch(
            "http://127.0.0.1:8000/analyze-coffee",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        result.innerText = "Coffee is: " + data.result;

    } catch (error) {
        result.innerText = "Error analyzing image.";
        console.error(error);
    }
}
