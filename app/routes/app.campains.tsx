// import { Button, InlineGrid, Layout, LegacyCard, Page, Tabs, Text } from '@shopify/polaris'
// import React, { useCallback, useState } from 'react'
// import {tabs} from "../utils/tabs"
// import CreateCampainForm from './app.createCampainForm'

// type Props = {}

// const Campains = (props: Props) => {

//     const [selected, setselected] = useState(0);
//     const handleChange = useCallback((selecTabIndex: number) => setselected(selecTabIndex),[])
    
//   return (
//     <Page>
//         <Layout>
//             <Layout.Section>
//                 <InlineGrid columns={2}>
//                     <Text variant='heading3xl' as='h2'>Cam-Pains</Text>
//                     <Button>Create New</Button>
//                 </InlineGrid>
//             </Layout.Section>
//             <Layout.Section>
//                 <LegacyCard>
//                     <Tabs tabs={tabs} selected={selected} onSelect={handleChange}>
//                         <LegacyCard title={tabs[selected].content}>
//                             {tabs[selected].component}
//                         </LegacyCard>
//                     </Tabs>
//                 </LegacyCard>
//             </Layout.Section>
//             <Layout.Section>
//                 <CreateCampainForm/>
//             </Layout.Section>
            
//         </Layout>
//     </Page>
//   )
// }
// export default Campains