import React, { Suspense } from 'react'
import { CompanyHistory, CompanyIntro, CompanyLocation, CompanyName, CompanyProducts, Executives, MissionStatement, CompanyTargetMarket, CompanyAdvantage, FinancialOverview, Milestones, Partnerships, Responsibility, CompanyGoals , CompanyContact, Loading} from '..'

export default function CompanyTabContents({ value, setValue }) {
    return (
        <div>
            {value === 'name' && <CompanyName setValue={setValue} />}
            {value === 'intro' && <CompanyIntro setValue={setValue} />}
            {value === 'mission' && <MissionStatement setValue={setValue} />}
            {value === 'history' && <CompanyHistory setValue={setValue} />}
            {value === 'executives' && <Executives setValue={setValue} />}
            {value === 'location' && <CompanyLocation setValue={setValue} />}
            {value === 'product' && <CompanyProducts setValue={setValue} />}
            {value === 'market' && <CompanyTargetMarket setValue={setValue} />}
            {value === 'advantage' && <CompanyAdvantage setValue={setValue} />}
            {value === 'overview' && <FinancialOverview setValue={setValue} />}
            {value === 'milestones' && <Milestones setValue={setValue} />}
            {value === 'partnerships' && <Partnerships setValue={setValue} />}
            {value === 'responsibility' && <Responsibility setValue={setValue} />}
            {value === 'goals' && <CompanyGoals setValue={setValue} />}
            {value === 'contact' && <CompanyContact setValue={setValue} />}
        </div>
    )
}
