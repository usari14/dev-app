// import { Form } from '@remix-run/react'
// import { Button, Frame, Layout, Modal, Page, TextField } from '@shopify/polaris'
// import React, { useCallback, useState } from 'react'

// type Props = {}

// const CreateCampainForm = (props: Props) => {
//     const [activator, setactivator] = useState(true)
//     const [value, setValue] = useState("default")
//     const handleModalChange = useCallback(() => setactivator(!activator), [activator])
//     const handleChangeText = useCallback((newValue: string) => setValue(newValue), [])
//     const activate = <Button onClick={handleModalChange}>Open</Button>

//     return (
//         <Page>
//             <Frame>
//                 <Modal
//                     activator={activate}
//                     open={activator}
//                     onClose={handleModalChange}
//                     title="Create a new Email Campaign"
//                     primaryAction={{
//                         content: 'Finish Later',
//                         onAction: () => { },
//                     }}
//                     secondaryActions={[
//                         {
//                             content: 'Finish Later',
//                             onAction: () => { },
//                         },
//                     ]}
//                 >
//                     <Modal.Section>
//                         <Form>
//                             <Layout>
//                                 <Layout.Section>
//                                     <TextField label="Campaign Name" value={value} onChange={handleChangeText} autoComplete='off' />
//                                     <TextField label="To" value={value} onChange={handleChangeText} autoComplete='off' />
//                                     <TextField label="Corporations" value={value} onChange={handleChangeText} autoComplete='off' />
//                                     <TextField label="From" value={value} onChange={handleChangeText} autoComplete='off' />
//                                     <TextField label="Email Subject" value={value} onChange={handleChangeText} autoComplete='off' />
//                                     <TextField label="Content" value={value} onChange={handleChangeText} autoComplete='off' />
//                                     <Button>Send</Button>
//                                 </Layout.Section>
//                             </Layout>
//                         </Form>
//                     </Modal.Section>
//                 </Modal>
//             </Frame>
//         </Page>
//     )
// }

// export default CreateCampainForm
