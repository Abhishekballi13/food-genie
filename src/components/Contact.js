const Contact = () => {
    return(
        <div>
            <h1 className="text-center text-xl font-bold">Contact us Page</h1>
            <form>
                <input class="border border-black p-2 m-2" placeholder="name" type="text"/>
                <input class="border border-black p-2 m-2" placeholder="message" type="text"/>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;