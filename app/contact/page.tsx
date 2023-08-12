'use client'

// import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Contact: NextPage = () => {
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
        <>
            <section className='pt-[125px] sm:pt-[140px] lg:pt-[160px]'>
                <div className="pb-[70px]">
                    <div className='innerDiv mx-auto'>
                        <div className='grid lg:grid-cols-2 gap-8 lg:items-start'>
                            <div className='bg-primary lg:order-2 text-white py-12 lg:px-12 px-6 lg:mb-0 mb-6 rounded-xl'>
                                <h3 className='md:text-4xl text-2xl font-medium mb-3'>How can we help?</h3>
                                <p className=''>Have questions or need to report an issue with a Uvera product or service? We&#39;ve got you covered.</p>
                                <ul className='mt-6 '>
                                    <li className='mb-4'>
                                        <a href='mailto:admissions@gurucool.xyz' className='flex items-center'>
                                            <span className='flex items-center justify-center md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>unicusmobility@gmail.com</span>
                                        </a>
                                    </li>
                                    <li className='mb-4'>
                                        <a className='flex items-center'>
                                            <span className='flex items-center justify-center md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-primary" icon={faPhone} />
                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>+91 9718122534</span>
                                        </a>
                                    </li>
                                    <li className='mb-4'>
                                        <a className='flex items-center'>
                                            <span className='flex items-center justify-center md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-primary" icon={faWhatsapp} />                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>+91 9718122534</span>
                                        </a>
                                    </li>
                                    {/* <li className='mb-4'>
                                        <a className='flex items-center'>
                                            <span className='flex items-center justify-center bg-[#ECF8F9] md:h-12 md:w-12 w-9 h-9 rounded-full md:text-xl text-sm'>
                                                <FontAwesomeIcon className="text-primary" icon={faLocationPin} />                                            </span>
                                            <span className='ml-3 md:text-lg text-base font-medium'>Indian Chamber of Commerce 4, India Exchange Place, Kolkata-700001</span>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>

                            <div className=''>
                                <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Contact us here</h3>
                                <p className='text-[#444444] text-lg font-medium mb-5'>Looking forward to hear from you!</p>
                                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                                    <input
                                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                                        placeholder='First Name'
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                                        placeholder='Last Name'
                                        type='text'
                                        id='name'
                                        name='name'
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
                        </div>
                        <div className='mt-20'>
                            <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Our Offices</h3>
                            <div className='flex flex-wrap gap-10 mt-6'>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Head Office</h4>
                                    <p>ICC Towers, 4 India Exchange Place, Kolkata-700001</p>
                                    <p>Contact :- 033-22534200</p>
                                    <p>Email: ceo@indianchamber.net</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Hyderabad Office</h4>
                                    <p>ICC Towers, 4 India Exchange Place, Kolkata-700001</p>
                                    <p>Contact :- 033-22534200</p>
                                    <p>Email: ceo@indianchamber.net</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Chennai Office</h4>
                                    <p>ICC Towers, 4 India Exchange Place, Kolkata-700001</p>
                                    <p>Contact :- 033-22534200</p>
                                    <p>Email: ceo@indianchamber.net</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Bihar Office</h4>
                                    <p>ICC Towers, 4 India Exchange Place, Kolkata-700001</p>
                                    <p>Contact :- 033-22534200</p>
                                    <p>Email: ceo@indianchamber.net</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Kolkata Office</h4>
                                    <p>ICC Towers, 4 India Exchange Place, Kolkata-700001</p>
                                    <p>Contact :- 033-22534200</p>
                                    <p>Email: ceo@indianchamber.net</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Head Office</h4>
                                    <p>ICC Towers, 4 India Exchange Place, Kolkata-700001</p>
                                    <p>Contact :- 033-22534200</p>
                                    <p>Email: ceo@indianchamber.net</p>
                                </div>
                                <div className='max-w-[350px]'>
                                    <h4 className="text-[18px] font-[500]">Bangalore Office</h4>
                                    <p>ICC Towers, 4 India Exchange Place, Kolkata-700001</p>
                                    <p>Contact :- 033-22534200</p>
                                    <p>Email: ceo@indianchamber.net</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Important Email IDs</h3>
                            <div className="overflow-x-auto mt-5">
                                <div className="inline-block min-w-full">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full border">
                                            <tbody>
                                                <tr className="border-b ">
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                </tr>
                                                <tr className="border-b ">
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                    <td className="whitespace-nowrap border-r px-6 py-4 ">
                                                        <h5 className="text-[18px] font-[500]">Director General</h5>
                                                        <p>Dr. Rajeev Singh</p>
                                                        <p className="mt-4">Email – ceo@indianchamber.net</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
