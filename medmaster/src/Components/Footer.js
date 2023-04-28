function Footer() {
    return (
        <footer class="bg-white shadow h-auto dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-base text-gray-500 sm:text-center dark:text-white">© 2023 <a href="#" class="hover:underline">MedMaster</a>. All Rights Reserved.</span>
            <ul class="flex flex-wrap items-center mt-3 text-base font-medium text-white dark:text-white sm:mt-0">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    );
}

export default Footer;