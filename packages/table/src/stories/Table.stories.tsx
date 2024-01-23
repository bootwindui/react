import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../";
import { Meta } from '@storybook/react';
import { Badge } from '@bootwind/badges'
import { Button } from '@bootwind/button'
import { HiEllipsisHorizontal } from 'react-icons/hi2'

export default {
    title: '❖ • UI Components/Table',
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

const data = [
    {
        type: 'Wade Warren',
        status: 'Inactive',
        role: 'Scrum Master',
        email: 'wade@example.com',
        team: ['UI', 'Marketing'],
    },
    {
        type: 'Jerome Bell',
        status: 'Active',
        role: 'Scrum Master',
        email: 'wade@example.com',
        team: ['Product', 'Marketing'],
    },
    {
        type: 'Wade Warren',
        status: 'Inactive',
        role: 'Scrum Master',
        email: 'wade@example.com',
        team: ['UI', 'Marketing'],
    },
    {
        type: 'Jerome Bell',
        status: 'Active',
        role: 'Scrum Master',
        email: 'wade@example.com',
        team: ['Product', 'Marketing'],
    },
]

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
            {data.map(person => (
                <TableRow>
                    <TableCell>{person.type}</TableCell>
                    <TableCell>
                        <Badge variant={person.status == 'Active' ? 'success' : 'error'} withDot={true}>{person.status}</Badge>
                    </TableCell>
                    <TableCell>
                        {person.role}
                    </TableCell>
                    <TableCell>
                        {person.email}
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-1 flex-wrap flex-shrink-0">
                            {person.team.map(name => (
                                <Badge variant="primary">{name}</Badge>
                            ))}
                            <Badge variant="neutral">+ 3</Badge>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                    </TableCell>
                </TableRow>
            ))
            }
        </TableBody>
    </Table>
)

export const StripedTable = () => (
    <Table variant="striped">
        <TableHeader>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Team</TableHead>
            <TableHead></TableHead>
        </TableHeader>
        <TableBody>
            {data.map(person => (
                <TableRow>
                    <TableCell>{person.type}</TableCell>
                    <TableCell>
                        <Badge variant={person.status == 'Active' ? 'success' : 'error'} withDot={true}>{person.status}</Badge>
                    </TableCell>
                    <TableCell>
                        {person.role}
                    </TableCell>
                    <TableCell>
                        {person.email}
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-1 flex-wrap flex-shrink-0">
                            {person.team.map(name => (
                                <Badge variant="primary">{name}</Badge>
                            ))}
                            <Badge variant="neutral">+ 3</Badge>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                    </TableCell>
                </TableRow>
            ))
            }
        </TableBody>
    </Table>
)

export const BorderedTable = () => (
    <Table variant="striped" borders="all">
        <TableHeader>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Team</TableHead>
            <TableHead></TableHead>
        </TableHeader>
        <TableBody>
            {data.map(person => (
                <TableRow>
                    <TableCell>{person.type}</TableCell>
                    <TableCell>
                        <Badge variant={person.status == 'Active' ? 'success' : 'error'} withDot={true}>{person.status}</Badge>
                    </TableCell>
                    <TableCell>
                        {person.role}
                    </TableCell>
                    <TableCell>
                        {person.email}
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-1 flex-wrap flex-shrink-0">
                            {person.team.map(name => (
                                <Badge variant="primary">{name}</Badge>
                            ))}
                            <Badge variant="neutral">+ 3</Badge>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                    </TableCell>
                </TableRow>
            ))
            }
        </TableBody>
    </Table>
)