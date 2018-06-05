## Docker Is a virtualization enabling software
- Achieve process level virtualization, which are called as Container
- Container has all the necessary libraries to run a small bare minimum OS kernal along with the application which user wants to run, packed as a Image
- Image, is the snapshot of the packaging instructions specified in Dockerfile
- Container is the running instance of the image
- On a Machine (2 CPU, 4 GB RAM) - Hypersvisor -> VMs -> 2 or Max 3
- On a Machine (2 CPU, 4 GB RAM) - Process virtualization -> Containers -> 5
- Type of file system the images are built ? AuFS -> Union File System
- What is equivalent of a layer in Dockerfile -> Each command in Dockerfile
- When you should rebuild the docker image
- Where can we access host's file system & container's file system -> Dockerfile


Web Service - APIs
- MongoDB
- Media storage


Container 1 : 
	Web Service (NodeJS, Express)
Container 2 :
	MongoDB

Network (VPN)

Expose -> Within the private network of containers

Port -> Guest OS to Host OS

network_mode
- host : no port mapping
- bridge : port mapping
- none


How to run containers
Not a building tool but it can kickoff the build of a specific image

WebService => New Employee is registered

Scenario: Register New Employee
0. Add him to Employees database

1. Add him to the payroll system -> Worker

2. Enroll him for employee benefit system
3. Issue Employee ID & Badge
4. Add him to the Email system
5. Enable Leave Management System
6. Issue Hardware allocation request


Container 1 : 
	Web Service (NodeJS, Express)
Container 2 :
	MongoDB
Container 3 :
	PayrollService (NodeJS Worker service)
Container 4 :
	Redis




