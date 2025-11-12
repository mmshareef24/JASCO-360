# Base44 App


This app was created automatically by MatrixINfo.
It's a Vite+React app that communicates with the MatrixHRMS.

## Running the app

```bash
npm install
npm run dev
```

### Configure API for real data

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
# then set your API base URL and token
VITE_API_BASE_URL=https://your-api.example.com
VITE_API_TOKEN=your_token_here
```

The dashboard will call `GET /dashboard/stats` on `VITE_API_BASE_URL` and expects JSON:

```json
{
  "employees": 244,
  "attendanceToday": 226,
  "openTickets": 12
}
```

## Building the app

```bash
npm run build
```

For more information and support, please contact Base44 support at app@base44.com.
