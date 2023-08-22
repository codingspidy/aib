import React, { useState } from 'react'


const ContactForm = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState('');
    const [userEmailError, setUserEmailError] = useState<string>('');
    const [subjectError, setSubjectError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [formSent, setFormSent] = useState<boolean>(false);

    const handleSubmit = async () => {

        if (email.length == 0) {
            return setUserEmailError('Email is required');
            // } else if (email.length > 0 && !validateEmail(email)) {
            // 	return setUserEmailError('Please enter a valid email address');
            // } else {
            setUserEmailError('');
        }

        const clearForm = () => {
            setFirstName('');
            setLastName('');
            setEmail('');
            setSubject('');
            setMessage('');
        };

        if (subject.length == 0) {
            return setSubjectError('Please enter contact subject!');
        } else {
            setSubjectError('');
        }

        // try {
        // 	setLoading(true);
        // 	const response = await axios.post(`${strapi_end_point}/api/contacts`, {
        // 		data: {
        // 			firstName: firstName,
        //             lastName: lastName,
        // 			email: email,
        // 			subject: subject,
        // 			message: message,
        // 		},
        // 	});
        // 	setLoading(false);
        // 	setFormSent(true);
        // 	clearForm();
        // 	setTimeout(() => {
        // 		setFormSent(false);
        // 	}, 5000);
        // } catch (error) {
        // 	setLoading(true);
        // 	if (axios.isAxiosError(error)) {
        // 		if (error.response?.data.error.message.toLowerCase().includes('email')) return setUserEmailError(error.response?.data.error.message);
        // 	}
        // 	setLoading(false);
        // }
    };

    return (
        <div className=''>
            <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Contact us here</h3>
            <p className='text-[#444444] text-lg font-medium mb-5'>Looking forward to hear from you!</p>
            <form action="/api/send-email" method="post">
            <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                <input
                    className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                    placeholder='First Name'
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                    placeholder='Last Name'
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <input
                    className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                    placeholder='Email ID'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <span className='text-[#E63946] mt-1 ml-3 text-xs flex align-center'>
        {userEmailError.length > 0 && (
            <>
                <TiInfo className='text-sm mr-1' />
                {userEmailError}
            </>
        )}
    </span> */}
            </div>
            <div className='mb-3'>
                <input
                    className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                    placeholder='Subject'
                    type='text'
                    name='subject'
                    id='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                {/* <span className='text-[#E63946] mt-1 ml-3 text-xs flex align-center'>
        {subjectError.length > 0 && (
            <>
                <TiInfo className='text-sm mr-1' />
                {subjectError}
            </>
        )}
    </span> */}
            </div>
            <div className='mb-3'>
                <textarea
                    rows={7}
                    className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1'
                    id='message'
                    placeholder='Your Message'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            {/* <span className='text-yellow block my-6 text-base'>{formSent && <>You&#39;re response has been saved! Our team will reach out to you soon.</>}</span> */}
            <div className='text-center mb-3'>
                <button onClick={handleSubmit} type='submit' className='bg-primary text-white px-12 rounded-full py-3 flex items-center justify-center'> { /* onClcik={handleContact} disabled={loading} */}
                    {loading && <span className='spinner-loader mr-2'></span>}
                    Submit
                </button>
            </div>
            </form>
            {/* <p>
    By tapping submit, you agree to the
    <Link href='/termsofservice'>
        <span className='underline'> Terms of Service </span>
    </Link>
    and
    <Link href='/privacypolicy'>
        <span className='underline'> Privacy Policy </span>
    </Link>
</p> */}
        </div>
    )
}

export default ContactForm
