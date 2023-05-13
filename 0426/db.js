// Posts라고 하는 db 테이블에서 불러온 데이터들
const posts = [
    { 'title': '제목1', 'content': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'author': '작성자이름', 'imageUrl': 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200' },
    { 'title': '제목2', 'content': '내용1', 'author': '작성자이름', 'imageUrl': 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200' },
    { 'title': '제목3', 'content': '내용1', 'author': '작성자이름', 'imageUrl': 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200' },
    { 'title': '제목4', 'content': '내용1', 'author': '작성자이름', 'imageUrl': 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200' },
    { 'title': '제목5', 'content': '내용1', 'author': '작성자이름', 'imageUrl': 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200' }
];

// db에서 불러온 posts 데이터들을 밖으로 내보내서 다른 코드에서 쓸 수 있게 하는 코드
export { posts };
