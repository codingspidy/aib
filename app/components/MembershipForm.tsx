'use client'
import React, { useState } from 'react'

const MembershipForm = () => {
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
            <h3 className='text-primary md:text-4xl text-3xl font-semibold mb-1'>Membership Application Form</h3>
            {/* <p className='text-[#444444] text-lg font-medium mb-5'>Looking forward to hear from you!</p> */}
            <div className='space-y-3 mt-10'>
                <div className="bg-primary py-3 px-4 text-white">General Details</div>
                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Company/Applicant Name'
                        type='text'
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Address'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='City'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Pincode'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='State'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Country'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Telephone'
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Fax'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Email'
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Website'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                </div>
            </div>
            <div className='space-y-3 mt-10'>
                <div className="bg-primary py-3 px-4 text-white">Contact Person</div>
                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Title'
                        type='text'
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Name'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Surname'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Designation'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Mobile'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Direct Phone'
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Personal Email'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
            </div>
            <div className='space-y-3 mt-10'>
                <div className="bg-primary py-3 px-4 text-white">Name of the two top additional executives</div>
                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Title'
                        type='text'
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Name'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Surname'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Designation'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Title'
                        type='text'
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Name'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Surname'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Designation'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
            </div>
            <div className='space-y-3 mt-10'>
                <div className="bg-primary py-3 px-4 text-white">Additional Information</div>
                <div className='mb-3 flex flex-col lg:flex-row gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Company Type (Ltd, Pvt, etc)'
                        type='text'
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Year of Foundation'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='No of Employees'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Turnover (latest FY)-Rs. (Optional)'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className=''>
                    <textarea
                        rows={7}
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1'
                        id='message'
                        placeholder='Business Description'
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
            </div>
            <div className='mt-10 space-y-3'>
                <div className="bg-primary py-3 px-4 text-white">Business Interests</div>
                <textarea
                    rows={7}
                    className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1'
                    id='message'
                    placeholder='Give a brief description about your business interests'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className='mt-10 space-y-3'>
                <div className="bg-primary py-3 px-4 text-white">Referred By</div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Name'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Contact No'
                        type='text'
                        name='subject'
                        id='subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
            </div>
            <div className='mt-10 space-y-3'>
                <div className="bg-primary py-3 px-4 text-white">Products & Services</div>
                <div className='flex gap-3'>
                    <input
                        className='placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-1 h-12'
                        placeholder='Mention your products and services'
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                </div>
            </div>
            <div className='mt-10 space-y-3'>
                <div className="bg-primary py-3 px-4 text-white">Products & Services</div>
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full border text-sm text-center">
                                <thead className="border-b font-medium ">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="border-r px-6 py-4 "
                                        >
                                            Types Of Membership
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-r px-6 py-4 text-center "
                                        >
                                            Fee for One Year
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-r px-6 py-4 text-center "
                                        >
                                            Fee for Five Year
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b ">
                                        <td className="whitespace-nowrap border-r px-6 py-4 ">
                                            Indian
                                        </td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 ">
                                            Rs. 20,000
                                        </td>
                                        <td className="whitespace-nowrap text-center border-r px-6 py-4 ">
                                            Rs. 80,000
                                        </td>
                                    </tr>
                                    <tr className="border-b ">
                                        <td className="whitespace-nowrap border-r px-6 py-4 ">
                                            Overseas
                                        </td>
                                        <td className="whitespace-nowrap border-r px-6 py-4 ">
                                            USD 300
                                        </td>
                                        <td className="whitespace-nowrap text-center border-r px-6 py-4 ">
                                            USD 1,200
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-[600] mt-12'>Subscribe now and avail of a free two-month trial. You can cancel your subscription anytime.</p>
            <div className='mt-6 space-y-3'>
                <div className="bg-primary py-3 px-4 text-white mb-8">DOCUMENTS REQUIRED: Latest Balance Sheet, PAN No., Registration of Company, Address Proof - Telephone Bill/Electricity Bill</div>
                <div className=''>
                    I/We hereby subscribe to be a (see membership table)
                    <input
                        className='placeholder:text-slate-400 -mt-7 border-b border-b-slate-300 py-2 px-4 shadow-sm focus:outline-none focus:ring-1'
                        placeholder=''
                        type='text'
                        id='name'
                        name='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    member of the Association of International Businessmen (AIB) and declare that all the information providedin this membership application form is true and complete.
                </div>
            </div>
            <div className='text-center mt-7 float-right'>
                <button onClick={handleSubmit} type='submit' className='bg-primary text-white px-12 rounded-full py-3 flex items-center justify-center'> { /* onClcik={handleContact} disabled={loading} */}
                    {loading && <span className='spinner-loader mr-2'></span>}
                    Submit
                </button>
                </div>
        </div>
    )
}

export default MembershipForm
