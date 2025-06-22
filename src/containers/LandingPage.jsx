import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChartLine, faPiggyBank, faWallet, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const LandingPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    })

    const carouselItems = [
        {
            icon: faChartLine,
            title: "Track Your Finances",
            description: "Get real-time insights into your spending habits and financial growth."
        },
        {
            icon: faPiggyBank,
            title: "Save Smarter",
            description: "Our tools help you identify saving opportunities you didn't know existed."
        },
        {
            icon: faWallet,
            title: "All Accounts in One Place",
            description: "Connect all your financial accounts for a complete picture of your net worth."
        },
        {
            icon: faHandHoldingUsd,
            title: "Investment Tracking",
            description: "Monitor your investments and get personalized recommendations."
        }
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    return (
        <div className="min-h-screen bg-indigo-500 flex flex-col md:flex-row">

            <div className="md:w-1/2 text-white p-8 flex flex-col justify-center">
                <div className="max-w-md mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Personal Finance Tracker</h1>
                    <p className="text-xl mb-8 opacity-90">Take control of your financial future with our comprehensive tracking tools.</p>

                    <div className=" bg-opacity-10 border-1 border-white rounded-xl p-6 backdrop-blur-sm">
                        <Carousel
                            showArrows={false}
                            showStatus={false}
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            interval={5000}
                            stopOnHover={false}
                            swipeable={false}
                            emulateTouch={false}
                            animationHandler="fade"
                            renderIndicator={(onClickHandler, isSelected, index, label) => (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    className={`h-2 w-2 mx-1 rounded-full ${isSelected ? 'bg-white' : 'bg-white bg-opacity-30'}`}
                                    aria-label={label}
                                />
                            )}
                        >
                            {carouselItems.map((item, index) => (
                                <div key={index} className="px-4 py-8">
                                    <FontAwesomeIcon icon={item.icon} className="text-5xl mb-6" />
                                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-lg opacity-80">{item.description}</p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">

                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">
                            {isLogin ? 'Welcome back!' : 'Create your account'}
                        </h2>

                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        )}

                        {isLogin && (
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember" className="mr-2" />
                                    <label htmlFor="remember" className="text-gray-700">Remember me</label>
                                </div>
                                <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type="button"
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-indigo-600 hover:underline cursor-pointer font-medium"
                                >
                                    {isLogin ? 'Register here' : 'Sign in here'}
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LandingPage