

export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);

        //[2, 4, 8] splice(1, 2) -> returns [4, 8], original array [2], splice(index, # of element to delete starting from index) mutate the array
        //[2, 4, 8] slice(1, 2) -> returns 4, original array [2, 4, 8], slice(position, end position(not included)) does not mutate array
        this.likes.splice(index, 1);
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }
}