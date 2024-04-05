import React, { Suspense } from 'react'
import { ContactInfo, Education, Goals, Hobbies, Languages, Loading, Member, Name, Objective, Projects, Publications, Skills,  Testimonials, Title, Volunteer, WorkExperience } from '..'

export default function ProfileTabContents({value, setValue}) {
    return (
        <div>
            {value === 'name' && <Name setValue={setValue} />}
            {value === 'title' && <Title setValue={setValue} />}
            {value === 'objective' && <Objective setValue={setValue} />}
            {value === 'contact' && <ContactInfo setValue={setValue} />}
            {value === 'education' && <Education setValue={setValue} />}
            {value === 'work' && <WorkExperience setValue={setValue} />}
            {value === 'skills' && <Skills setValue={setValue} />}
            {value === 'member' && <Member setValue={setValue} />}
            {value === 'languages' && <Languages setValue={setValue} />}
            {value === 'volunteer' && <Volunteer setValue={setValue} />}
            {value === 'projects' && <Projects setValue={setValue} />}
            {value === 'publications' && <Publications setValue={setValue} />}
            {value === 'testimonials' && <Testimonials setValue={setValue} />}
            {value === 'hobbies' && <Hobbies setValue={setValue} />}
            {value === 'goals' && <Goals setValue={setValue} />}
        </div>
    )
}
