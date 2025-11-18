import Banner from '@/components/banner';
import { auth } from '@/lib/auth';
import OutlineForm from '@/modules/book/ui/components/outline-form'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const CreateBookView = async () => {
     const session = await auth.api.getSession({
          headers: await headers(),
        });
        if (!session) {
          redirect("/sign-in");
        }
  return (
     <>
        <Banner title="Create Book" linkText="create-book" />
    
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <OutlineForm/>
    </div>
    </>
  )
}
