
## Setting Up Locally

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)(you can use neondb if you want to host it for free)
-You can get Your free database from the Neondb database
### Setting up the project

1. Clone the repository

```bash
git clone https://github.com/shaghaf7/Shrinkr.git
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file in the root directory and add the following

```bash
DATABASE_URL=postgres://username:password@localhost:5432/database
```

4. Push the database schema to your database

```bash
npx prisma db push
```

5. Run the development server

```bash
npm dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
