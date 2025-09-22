import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';
import { Button } from '@/components/ui/button.js';
// import { Button } from '@/components/customComponent/customButton.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const POSTS = [
  { id: '1', title: 'post1' },
  { id: '2', title: 'post2' },
]

function wait(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}


export default function TaskApp() {
  const queryClient = useQueryClient()

  // 调用useQuery后，可以解构出data，isLoading，isError，state等
  const {data,isLoading,error} = useQuery({
    queryKey: ['posts', 'status', { page: 1 }], // 设置query的key，要求独一无二，以数组格式，可以提供多个key
    queryFn:({queryKey, signal})=>{
      // 通常执行调用API的函数，该函数是已经封装好的且带有返回Promise的函数
      return wait(1000).then(()=>[...POSTS])
    },  // 发起请求的函数
  })

  const query = useQuery({
    queryKey: ['posts', 'status', { page: 1 }], // 设置query的key，要求独一无二，以数组格式，可以提供多个key
    queryFn:({queryKey, signal})=>{
      // 通常执行调用API的函数，该函数是已经封装好的且带有返回Promise的函数
      return wait(1000).then(()=>[...POSTS])
    },  // 发起请求的函数
  })
  console.log(query)

  // 定义修改数据
  const newPostMutation = useMutation({
    mutationFn: (title:string) => wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title })),
    // 当新增一个post后，重新获取posts列表
    onSuccess: () => {
      // Invalidate and refetch 使原先的posts列表失效，重新获取
      queryClient.invalidateQueries({
        queryKey: ['posts']
      })
    }
  })

  if(isLoading) return <div>loading...</div>
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if(!data) return <div>no data</div> 
  return (
    <div>
      {data.map((post) => <h1 key={post.title}>{post.title}</h1>)}
        <Button 
          disabled={newPostMutation.isLoading}
          // 调用修改数据的函数
          onClick={()=>newPostMutation.mutate('new post')}
        >
          <ChevronLeft />
            按钮
          <ChevronRight />
        </Button>
      </div>
  );
  // return (
  //   <TasksProvider>
  //     <h1>Day off in Kyoto</h1>
  //     <AddTask />
  //     <TaskList />
  //   </TasksProvider>
  // );
}
