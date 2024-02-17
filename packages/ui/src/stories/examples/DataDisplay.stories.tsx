import { Meta } from "@storybook/react";
import { Card } from '@bootwind/card'
import { Table, TableBody, TableCell, TableRow } from '@bootwind/table'
import { HiPaperClip } from 'react-icons/hi2'

export default {
    title: '❖ • Examples/Data Display',
    argTypes: {},
} as Meta;

export const CardWithTable = () => {
    return (
        <Card noPadding title="Applicant Information" className="max-w-[800px] overflow-hidden" subtitle="Personal details and application." cardHeaderBorder>
            <Table variant="striped">
                <TableBody>
                    <TableRow>
                        <TableCell>Full name</TableCell>
                        <TableCell>Margot Foster</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Application for</TableCell>
                        <TableCell>Email address</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={200}>Salary expecatation</TableCell>
                        <TableCell>$120,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>About</TableCell>
                        <TableCell>Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Attachments</TableCell>
                        <TableCell>
                            <ul>
                                <li className="flex between items-center gap-2 justify-between">
                                    <div className="name flex items-center">
                                        <HiPaperClip />
                                        <span>resume_backend_developer.zip</span>
                                    </div>
                                    <a href="#">Download</a>
                                </li>
                            </ul>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    )
}
