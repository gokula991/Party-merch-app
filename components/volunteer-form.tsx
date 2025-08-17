"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const volunteerAreas = [
  "Phone Banking",
  "Canvassing",
  "Event Support",
  "Digital Outreach",
  "Community Organizing",
  "Campaign Events",
  "Data Entry",
  "Translation Services",
]

const availability = [
  "Weekday mornings",
  "Weekday afternoons",
  "Weekday evenings",
  "Weekend mornings",
  "Weekend afternoons",
  "Weekend evenings",
]

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    interests: [] as string[],
    availability: [] as string[],
    experience: "",
    skills: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckboxChange = (field: "interests" | "availability", value: string) => {
    setFormData({
      ...formData,
      [field]: formData[field].includes(value)
        ? formData[field].filter((item) => item !== value)
        : [...formData[field], value],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Volunteer form submitted:", formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Volunteer Sign-Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-medium">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Areas of Interest */}
          <div>
            <label className="block text-sm font-medium mb-3">Areas of Interest</label>
            <div className="grid grid-cols-2 gap-2">
              {volunteerAreas.map((area) => (
                <div key={area} className="flex items-center">
                  <input
                    type="checkbox"
                    id={area}
                    checked={formData.interests.includes(area)}
                    onChange={() => handleCheckboxChange("interests", area)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor={area} className="ml-2 text-sm text-gray-700">
                    {area}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium mb-3">Availability</label>
            <div className="grid grid-cols-2 gap-2">
              {availability.map((time) => (
                <div key={time} className="flex items-center">
                  <input
                    type="checkbox"
                    id={time}
                    checked={formData.availability.includes(time)}
                    onChange={() => handleCheckboxChange("availability", time)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor={time} className="ml-2 text-sm text-gray-700">
                    {time}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Experience and Skills */}
          <div>
            <label className="block text-sm font-medium mb-1">Previous Experience</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us about any relevant volunteer or political experience..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Special Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any special skills or talents you'd like to contribute..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Sign Up to Volunteer
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
