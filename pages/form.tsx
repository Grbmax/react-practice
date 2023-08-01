import { useState, useEffect } from "react";
const form = () => {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("")
    const [email, setEmail] = useState("");
    const [formValid, setFormValid] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!nameError && name.trim() !== "" && email.trim() !== "") {
            alert(`Name : ${name}\nEmail: ${email}`);
        } else alert("Please fill the form correctly");
        
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);

        if (newName.length <= 2) {
            setNameError("Name must have more than 2 letters");
        } else setNameError("");
    }


    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="flex p-5 flex-col border border-black rounded-lg justify-center items-center">
                <h1 className="text-xl mb-3">Form</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label>Name</label>
                    <input
                        onChange={handleNameChange}
                        id="name"
                        className="border rounded-lg border-black"></input>
                    {nameError && <span className="text-red-500 text-xs italic">{nameError}</span>}
                    <br />
                    <label>E-mail</label>
                    <input
                        onChange={handleEmailChange}
                        id="email"
                        className="border rounded-lg border-black"></input>
                    <button className="border bg-black text-white mt-4 rounded-lg border-white">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default form;