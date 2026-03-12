## What is **Hosting?** 🌐

**Hosting (Web Hosting)** is a service that allows your **website or web application to be available on the internet** so anyone can access it using a browser.

When you create a website (HTML, CSS, JS, Node.js, etc.), the files exist only on your **local computer**.
To make the website accessible to the world, you must upload those files to a **server that runs 24/7**. That server is provided by a **hosting provider**.

---

## How Hosting Works ⚙️

![Image](https://miro.medium.com/v2/resize%3Afit%3A1200/1%2A8Mx1zp-V23JNppa6irFyTg.jpeg)

![Image](https://miro.medium.com/1%2AcDvw0X9bIfQYVPdEbEMQeg.png)

![Image](https://integrio.net/static/9f09bf2d6c6a9bea551b65c4ec625c4d/web-application-architechture-diagram.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AHDF6l4Vo7vZARRxE5QKrBg.png)

Step-by-step process:

1. **You create a website**

   * Example files:
   * `index.html`
   * `style.css`
   * `script.js`
   * Node.js backend code

2. **You upload the website to a hosting server**

   * This is done using:
   * FTP
   * Git
   * Control panel
   * Deployment tools

3. **You buy a domain name**

   * Example: `mywebsite.com`

4. **DNS connects the domain to the hosting server**

   * DNS translates the domain to the **server IP address**

5. **User opens the website**

   * User types `mywebsite.com` in a browser

6. **Server sends website files**

   * Browser loads the page and displays the website

---

## Important Terms in Hosting 📚

### 1. Server

A **server** is a powerful computer that stores website files and runs 24/7.

Example:

* Linux servers
* Cloud servers

---

### 2. Domain Name

A **domain** is the website address.

Example:

* `google.com`
* `amazon.com`
* `mysite.com`

Instead of remembering an **IP address**, we use domain names.

Example:

```
IP Address: 142.250.190.78
Domain: google.com
```

---

### 3. DNS (Domain Name System)

DNS converts the **domain name → IP address**.

Example process:

```
User types: mysite.com
DNS finds: 192.168.1.1
Browser connects to that server
```

---

### 4. Bandwidth

Bandwidth is the **amount of data transferred between server and users**.

Example:

If your website has:

* images
* videos
* large files

More bandwidth is required.

---

### 5. Storage

Hosting servers store:

* Website files
* Images
* Databases
* Videos

Example:

```
Basic plan → 5GB
Premium plan → 100GB
```

---

### 6. Uptime

Uptime means **how often your website stays online**.

Example:

```
99.9% uptime
```

Means your website rarely goes offline.

---

## Types of Web Hosting 🖥️

### 1. Shared Hosting

![Image](https://learn.microsoft.com/en-us/iis/web-hosting/planning-the-web-hosting-architecture/shared-hosting-configuration/_static/image1.jpg)

![Image](https://static.wixstatic.com/media/a77aa0_8a7670ebf4a44be68bd385a560d79f57~mv2.png/v1/fill/w_608%2Ch_402%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/a77aa0_8a7670ebf4a44be68bd385a560d79f57~mv2.png)

![Image](https://assets.community.aws/a/2cKd0D3nRJC6aIPYOg5H2XVHJ2t/shar.webp)

![Image](https://cms.verpex.com/assets/blog/shared-hosting-vs-reseller-hosting.webp)

Many websites share **one server**.

Pros:

* Cheap
* Easy to use

Cons:

* Slow if many sites use resources
* Limited control

Best for:

* Small websites
* Beginners

---

### 2. VPS Hosting (Virtual Private Server)

![Image](https://www.cherryservers.com/v3/assets/blog/2023-07-31/01.png)

![Image](https://www.cloudoye.com/images/blog/vps-hosting-plan-india.jpg)

![Image](https://minio.production.cloudplatform.tech/wp-guru-guides-uploads/2025/12/2025_GG_Guide-to-understanding-VPS_Content_Visual_1_VPS-Architecture-Diagram.svg)

![Image](https://minio.production.cloudplatform.tech/wp-guru-guides-uploads/2025/12/2025_GG_Guide-to-understanding-VPS_Content_Visual_5_Migration-from-Shared-to-VPS-copy.svg)

A physical server is divided into **multiple virtual servers**.

Pros:

* More control
* Better performance

Cons:

* Costs more
* Requires technical knowledge

Best for:

* Medium websites
* Developers

---

### 3. Dedicated Hosting

![Image](https://wp-public-fs.s3.ap-south-1.amazonaws.com/tasks/166683bcb8fd8c03a5513c8f67a0add0973797992d7555/images/mceu_20402447411720295615-6689a0c096469.png)

![Image](https://www.servers.com/dA/e953f2877a/image/Inside.png)

![Image](https://image.slidesharecdn.com/vps-hosting-vs-dedicated-hosting-220301110818/95/VPS-Hosting-vs-Dedicated-Hosting-1-638.jpg)

![Image](https://assets.entrepreneur.com/article/pick-host-small-business.jpg)

You get **an entire server for your website**.

Pros:

* Very fast
* Full control

Cons:

* Expensive
* Needs server management

Best for:

* Large companies
* High traffic websites

---

### 4. Cloud Hosting

![Image](https://www.researchgate.net/publication/272683460/figure/fig3/AS%3A614173486624770%401523441778390/Multi-Cloud-and-Multi-Server-Audit-Architecture.png)

![Image](https://www.researchgate.net/publication/329033786/figure/fig4/AS%3A694567263272961%401542609148614/The-diagram-of-distributed-computing-infrastructure-Source.jpg)

Your website runs on **multiple connected servers**.

Pros:

* Highly scalable
* Reliable
* Handles large traffic

Cons:

* Pricing can vary

Best for:

* Modern applications
* SaaS platforms
* Scalable projects

---

## Hosting for Node.js / Express Apps 🚀

Since you are learning **Express.js and MongoDB**, common hosting platforms are:

| Platform     | Best For           |
| ------------ | ------------------ |
| Vercel       | Frontend + APIs    |
| Render       | Node.js apps       |
| Railway      | Full stack apps    |
| Heroku       | Node.js hosting    |
| AWS          | Large applications |
| DigitalOcean | VPS servers        |

Example deployment process:

1. Build Express app
2. Push code to GitHub
3. Connect GitHub to hosting
4. Hosting platform deploys automatically

---

## Example of Hosting Flow (Node.js App)

```
User → Browser → Domain (mysite.com)
           ↓
        DNS Server
           ↓
     Hosting Server
           ↓
     Node.js Express App
           ↓
        MongoDB Database
           ↓
        Response to user
```

---

## Real Example

If you build:

```
E-commerce website
```

Files might include:

```
Frontend:
HTML
CSS
JavaScript
React

Backend:
Node.js
Express

Database:
MongoDB
```

Hosting could be:

```
Frontend → Vercel
Backend → Render
Database → MongoDB Atlas
```

---

## Simple Analogy 🏠

Think of a **website like a house**.

| Concept | Example                   |
| ------- | ------------------------- |
| Website | House                     |
| Hosting | Land where house is built |
| Domain  | House address             |
| Server  | The building              |

Without land (**hosting**), the house (**website**) cannot exist online.

---


