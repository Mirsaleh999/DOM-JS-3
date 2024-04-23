const imageItems = document.querySelectorAll(".imageItem");
const modal = document.querySelector(".modal");
imageItems.forEach((item) => {
    item.addEventListener("click", function () {
        const [img, prgrph] = this.children;
        const newModal = document.createElement("div");
        newModal.classList.add("modal");
        const image = img;
        const modalImage = document.createElement("img");
        modalImage.src = image.src;
        const paragraph = prgrph;
        const modalText = document.createElement("p");
        const modalTextContent = document.createTextNode(paragraph.innerText);
        modalText.appendChild(modalTextContent);
        const modalCloseBtn = document.createElement("button");
        modalCloseBtn.classList.add("close-btn");
        modalCloseBtn.innerText = "X";
        newModal.appendChild(modalCloseBtn);
        newModal.appendChild(modalImage);
        newModal.appendChild(modalText);
        document.body.appendChild(newModal);
        modalCloseBtn.addEventListener("click", () => newModal.remove());
    });
  
    
    
});