import Navigation from 'pages/Navbar/Navbar';

export default function JobFeed () {
    return (
        <div>
            <Navigation/>
            <div class="flex flex-col items-center justify-center p-12">
                <div class="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Full Stack Developer Needed!</h2>
                        <h4 class="text-gray-800 p-1 text-xl font-semibold">React, JS, GraphQL</h4>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="/profile" class="text-xl font-medium text-indigo-500">Apply for this Job!</a>
                    </div>
                </div>
                <div class="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Full Stack Developer Needed!</h2>
                        <h4 class="text-gray-800 p-1 text-xl font-semibold">React, JS, GraphQL</h4>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="/profile" class="text-xl font-medium text-indigo-500">Apply for this Job!</a>
                    </div>
                </div>
                <div class="max-w-xl py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Full Stack Developer Needed!</h2>
                        <h4 class="text-gray-800 p-1 text-xl font-semibold">React, JS, GraphQL</h4>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="/profile" class="text-xl font-medium text-indigo-500">Apply for this Job!</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}