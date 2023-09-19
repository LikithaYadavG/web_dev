document.addEventListener("DOMContentLoaded", function () {
    const fetchButton = document.getElementById("fetchButton");
    const dogList = document.getElementById("dogList");

    fetchButton.addEventListener("click", function () {
        fetch("Dogs.json")
            .then((response) => response.json())
            .then((data) => {
                const dogDetails = data.map((dog) => {
                    return `
                        <div>
                            <p><strong>Breed:</strong> ${dog.breed}</p>
                            <p><strong>Age:</strong> ${dog.color} years</p>
                            <p><strong>Color:</strong> ${dog.Country}</p>
                        </div>
                    `;
                }).join("");

                dogList.innerHTML = dogDetails;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });
});
