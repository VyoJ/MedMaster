function Card(props) {
    return (
        <a class="block max-w-sm ml-10 mb-10 p-10 h-64 border border-white rounded-lg shadow hover:bg-gray-100 dark:border-white dark:hover:bg-[#AFD8F2]">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-white dark:text-white">{props.title}</h5>
            <p class="font-normal text-center text-white dark:text-white">{props.body}</p>
        </a>
    );
}

export default Card;