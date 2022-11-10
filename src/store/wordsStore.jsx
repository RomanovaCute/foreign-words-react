import { makeAutoObservable, runInAction } from "mobx";

class Storage {
  list = [];
  error = false;
  isLoading = true;

  constructor () {
    makeAutoObservable(this)
  }

  async getWords() {
    runInAction (() => {
      this.isLoading = true;
      fetch('http://itgirlschool.justmakeit.ru/api/words')
        .then(res => res.json())
        .then((json) => {
          runInAction (() => {
            this.list = json
          })
        })
        .catch(() => {
          this.error = true;
        }).finally(() => {
          this.isLoading = false;
        });
      });
  }

  deleteWord = (id) => {
    runInAction (async () => {
      let isDelete = window.confirm("Вы действительно хотите удалить это слово?");
      if (isDelete) {
        try {
          const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST',
          });
          if(res.ok) {
            let newList = [...this.list].filter(item => item.id!==id);
            this.list = newList;
          };
        } catch(e) {
          alert(`Ошибка соединения с сервером. ${e}`);
        };
      }
    });
  }
}

export { Storage };