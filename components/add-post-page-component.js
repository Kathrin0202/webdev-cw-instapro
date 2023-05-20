import { renderUploadImageComponent } from "./upload-image-component.js";
export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <div class="form">
      <h1 class="form-title">Добавить пост</h1>
      <div class="form-inputs">
      <div class="file-upload-image-container">
      <label class="file-upload-label secondary-button">
      <input type="file" class="file-upload-input" style="display:none">
      Выберите фото
      </label>
      </div>
      </div>
      <label>
      <p>Опишите фотографию:</p>
      <textarea class="input textarea" rows="4"></textarea>
      </label>
      <button class="button" id="add-button">Добавить</button>
      </div>
      </div>
  `;
    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {

      onAddPostClick({
        description: document.querySelector(".textarea").value,
        imageUrl: imageUrl,
      });
    });
  };

  render();
  renderUploadImageComponent({
    element: appEl.querySelector('.file-upload-image-container'),
    onImageUrlChange(newImageUrl){
      imageUrl = newImageUrl;
    },
  });
}
