import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../";
import { Meta } from '@storybook/react';
import { Badge } from '@bootwind/badges'
import { Button } from '@bootwind/button'
import { HiEllipsisHorizontal } from 'react-icons/hi2'

export default {
    title: 'Components/Table',
    component: Table,
    args: {
        type: 'card',
        totalResults: 50,
        resultsPerPage: 10
    },
    argTypes: {
        type: {
            options: ['card', 'centered', 'simple'],
            control: {
                type: 'select'
            }
        },
        currentPage: {
            control: {
                type: 'number'
            }
        },
        totalResults: {
            control: {
                type: 'number'
            }
        },
        resultsPerPage: {
            control: {
                type: 'number'
            }
        },
    },
} as Meta;


export const BasicTable = () => (
    <Table>
        <TableHeader>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Team</TableHead>
            <TableHead></TableHead>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Wade Warren</TableCell>
                <TableCell>
                    <Badge variant="error" withDot={true}>Inactive</Badge>
                </TableCell>
                <TableCell>
                    Scrum Master
                </TableCell>
                <TableCell>
                    wade@example.com
                </TableCell>
                <TableCell>
                    <div className="flex gap-1 flex-wrap flex-shrink-0">
                        <Badge variant="primary">UI</Badge>
                        <Badge variant="primary">Marketing</Badge>
                        <Badge variant="neutral">+ 3</Badge>
                    </div>
                </TableCell>
                <TableCell>
                    <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ralph Edwards</TableCell>
                <TableCell>
                    <Badge variant="success" withDot={true}>Active</Badge>
                </TableCell>
                <TableCell>
                    UI/UX Designer
                </TableCell>
                <TableCell>
                    ralph@example.com
                </TableCell>
                <TableCell>
                    <div className="flex gap-1 flex-wrap flex-shrink-0">
                        <Badge variant="primary">Product</Badge>
                        <Badge variant="primary">Marketing</Badge>
                        <Badge variant="neutral">+ 3</Badge>
                    </div>
                </TableCell>
                <TableCell>
                    <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
)