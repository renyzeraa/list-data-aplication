import { Plus, Search, FileDown, MoreHorizontal } from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Control, Input } from './components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Pagination } from './components/pagination.tsx'

export function App() {
  return (
    <div className="py-10 space-y-8">
      <div>
        <Header></Header>
        <Tabs></Tabs>
      </div>
      <main className="max-w-6xl space-y-5 mx-auto">
        <div className='flex items-center gap-3'>
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant='primary'>
            <Plus className='size-3'></Plus>
            Create new
          </Button>
        </div>
        <div className='flex items-center justify-between'>
          <Input variant='filter'>
            <Search className='size-3'/>
            <Control placeholder='Search tags...'/>
          </Input>
          <Button>
            <FileDown className='size-3'/>
            Export
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              Array.from({length: 10}).map((_,i) => {
                  return (
                    <TableRow key={i}>
                    <TableCell></TableCell>
                    <TableCell>
                      <div className='flex flex-col gap-0.5'>
                        <span className='font-medium'>React</span>
                        <span className='text-xs text-zinc'>01230102-POM390XDN-A3MFS4F82-09123K</span>
                      </div>
                    </TableCell>
                    <TableCell className='text-zinc-300'>
                      13 video(s)
                    </TableCell>
                    <TableCell className='text-right'>
                      <Button size='icon'>
                        <MoreHorizontal className='size-4'/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  )
                })
            }
          </TableBody>
        </Table>
        {/* <Pagination items={3} page={1} pages={2}/> */}
      </main>
  </div>  
  )
}
