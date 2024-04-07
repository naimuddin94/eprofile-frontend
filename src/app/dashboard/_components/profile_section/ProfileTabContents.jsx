'use client'
import React, { useState } from 'react'
import { ContactInfo, Education, Goals, Hobbies, Languages, Loading, Member, Name, Objective, Projects, Publications, Skills,  Testimonials, Title, Volunteer, WorkExperience } from '..'

export default function ProfileTabContents({value, setValue}) {
    const [profile,setProfile] =  useState({})
    const formData =  new FormData()
    return (
        <div>
            {value === 'name' && <Name setValue={setValue} setProfile={setProfile} profile={profile}  />}
            {value === 'title' && <Title setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'objective' && <Objective setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'contact' && <ContactInfo setValue={setValue} setProfile={setProfile} profile={profile}/>}
            {value === 'education' && <Education setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'work' && <WorkExperience setValue={setValue} setProfile={setProfile} profile={profile}/>}
            {value === 'skills' && <Skills setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'member' && <Member setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'languages' && <Languages setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'volunteer' && <Volunteer setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'projects' && <Projects setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'publications' && <Publications setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'testimonials' && <Testimonials setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'hobbies' && <Hobbies setValue={setValue} setProfile={setProfile} profile={profile} />}
            {value === 'goals' && <Goals setValue={setValue} setProfile={setProfile} profile={profile} />}
        </div>
    )
}
