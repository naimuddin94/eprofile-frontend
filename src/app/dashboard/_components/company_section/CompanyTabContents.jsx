import React, { Suspense } from 'react'
import { CompanyHistory, CompanyIntro, CompanyLocation, CompanyName, CompanyProducts, Executives, MissionStatement, CompanyTargetMarket, CompanyAdvantage, FinancialOverview, Milestones, Partnerships, Responsibility, CompanyGoals , CompanyContact, Loading} from '..'

export default function CompanyTabContents({ value, setValue }) {
    const [company, setCompany] = React.useState({})
    return (
        <div>
            {value === 'name' && <CompanyName setValue={setValue} company={company} setCompany={setCompany} />}
            {value === 'intro' && <CompanyIntro setValue={setValue} company={company} setCompany={setCompany} />}
            {value === 'mission' && <MissionStatement setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'history' && <CompanyHistory setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'executives' && <Executives setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'location' && <CompanyLocation setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'product' && <CompanyProducts setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'market' && <CompanyTargetMarket setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'advantage' && <CompanyAdvantage setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'overview' && <FinancialOverview setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'milestones' && <Milestones setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'partnerships' && <Partnerships setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'responsibility' && <Responsibility setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'goals' && <CompanyGoals setValue={setValue} company={company} setCompany={setCompany}/>}
            {value === 'contact' && <CompanyContact setValue={setValue} company={company} setCompany={setCompany}/>}
        </div>
    )
}
