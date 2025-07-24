import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChartLine, faPiggyBank, faWallet, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'
import { registerApi } from '../Services/ApiCall'
import CommonStatusPopUp from '../basicComponents/CommonStatusPopUp'
import { body } from 'framer-motion/client'

const LandingPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    })

    const [openStatusPopUp, setOpenStatusPopUp] = useState({
        isOpen : false,
        type: 'success',
        body: ''
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
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleFormToggle = () => {
        setIsLogin(!isLogin)
        setErrors({ email: '', password: '', name: '', confirmPassword: '' })
        setFormData({
            email: '',
            password: '',
            name: '',
            confirmPassword: ''
        })
    }

    const validateForm = () => {
        let valid = true
        const newErrors = { email: '', password: '', name: '', confirmPassword: '' }

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter email'
            setErrors(newErrors)
            return false
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
            setErrors(newErrors)
            return false
        }

        if (!formData.password) {
            newErrors.password = 'Please enter password'
            setErrors(newErrors)
            return false
        } else if (formData.password.length < 3) {
            newErrors.password = 'Password must be at least 3 characters'
            setErrors(newErrors)
            return false
        }

        if (!isLogin) {
            if (!formData.name.trim()) {
                newErrors.name = 'Please enter your name'
                setErrors(newErrors)
                return false
            }

            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password'
                setErrors(newErrors)
                return false
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match'
                setErrors(newErrors)
                return false
            }
        }

        setErrors(newErrors)
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        if (isLogin) {

            const user = mockUsers.find(user => user.email === formData.email)
            if (!user) {
                setErrors({ email: 'Email not registered', password: '' })
            } else if (user.password !== formData.password) {
                setErrors({ email: '', password: 'Incorrect password' })
            } else {

                console.log('Login successful', user)

            }
        } else {
            const regResponce = await registerApi(formData)
            console.log(regResponce.status)
            if (regResponce.status === 400) {
                setErrors({ email: 'Email already registered', password: '', name: '', confirmPassword: '' })
            }
            else if (regResponce.status === 201) {
                setOpenStatusPopUp({
                    isOpen: true,
                    type: 'success',
                    body: 'Registration successful! Please login...'
                })
                handleFormToggle();
            }
            else {
                setOpenStatusPopUp({
                    isOpen: true,
                    type: 'error',
                    body: 'Registration failed. Please try again later.'
                })
            }
        }
    }

    return (
        <div className="min-h-screen bg-indigo-500 flex flex-col md:flex-row">

            <div className="md:w-1/2 text-white p-8 flex flex-col justify-center">
                <div className="max-w-md mx-auto">
                    <Link to={'/home'}><h1 className="text-4xl font-bold mb-6">Personal Finance Tracker</h1></Link>
                    <p className="text-xl mb-8 opacity-90">Take control of your financial future with our comprehensive tracking tools.</p>

                    <div className="bg-opacity-10 border-1 border-white rounded-xl p-6 backdrop-blur-sm">
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
                                    className={`cursor-pointer h-2 w-2 mx-1 rounded-full ${isSelected ? 'bg-white' : 'bg-white bg-opacity-30'}`}
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

            {/* Right side Login/REgister - Form */}
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
                                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                                required
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {!isLogin && (
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                                    required
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
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
                            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type="button"
                                    onClick={handleFormToggle}
                                    className="text-indigo-600 hover:underline cursor-pointer font-medium"
                                >
                                    {isLogin ? 'Register here' : 'Sign in here'}
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {
                openStatusPopUp.isOpen &&
                <CommonStatusPopUp
                    isOpen={openStatusPopUp.isOpen}
                    onClose={() => setOpenStatusPopUp(prev => ({ ...prev, isOpen: false }))}
                    type={openStatusPopUp.type}
                    body={openStatusPopUp.body}
                />
            }
        </div>
    )
}

export default LandingPage