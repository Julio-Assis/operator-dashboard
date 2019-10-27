import React from 'react';
import { Card } from 'antd';

interface ICustomCardProps {
    stopTime: string;
    timeStopped: string;
}

const CustomCard = (props: ICustomCardProps) => (
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}
    style={{borderColor: 'grey', maxWidth: '500px'}}>
        <div>
            <div>
                <span>Stop time</span> {props.stopTime}
            </div>
            <div>
                <span>Time stopped</span> {props.timeStopped}
            </div>
        </div>
    </Card>
)

export function MachineParameters() {
    return (
        <div style={{display: 'flex', height: '100%', justifyContent: 'space-between', flexDirection: 'column'}}>
           
           <div style={{
               display: 'grid',
               gridTemplateColumns: 'repeat(3, 1fr)',
               gridGap: '10px',
               gridAutoRows: 'minmax(100px, auto)'
           }}>

           {
               [1,2,3,4,5,6].map((num, index) => {
                   return <CustomCard
                   stopTime={'23h15'}
                   timeStopped={'2h10'}
                   />
                })
            }
            </div>

            
        </div>
    );
}