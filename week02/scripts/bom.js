const input = document.querySelector('#favchap');
const addChapterButton = document.querySelector('button');
const list = document.querySelector("#list");

addChapterButton.addEventListener("click", addChapter)


function addChapter()
{
    const text = input.value;
    if (text == "" || text.trim() == "")
    {
        input.focus();
        return;
    }
    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    listItem.textContent = input.value;
    deleteBtn.textContent = '❌';
    listItem.append(deleteBtn);
    list.append(listItem);
    deleteBtn.addEventListener("click", function(){
        list.removeChild(listItem);
        input.focus();
    })
    input.value = "";
    input.focus();
}

