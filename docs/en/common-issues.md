# 🛠️ Common Issues & Solutions

Quick solutions to the most common problems users face.

---

## 🚫 Extension Not Showing Up

**Problem:** Extension icon is installed but side panel doesn't open.

**Solutions:**
1. **Check you're on the Flow page**
   - Navigate to: `labs.google/fx/tools/flow`
   - Extension only works on this specific page

2. **Reload the page**
   - Press `Ctrl+R` (Windows) or `Cmd+R` (Mac)
   - Click the extension icon again

3. **Reload the extension**
   - Go to `chrome://extensions`
   - Find SnapGen Flow
   - Click the refresh icon

---

## ⚠️ "Not on Flow Page" Warning

**Problem:** Seeing a warning that says you're not on the Flow page.

**Solutions:**
1. **Check the URL**
   - Make sure it's: `labs.google/fx/tools/flow`
   - Not: `labs.google` (homepage) or other Flow tools

2. **Wait for page to load**
   - Sometimes the extension checks before the page is ready
   - Wait 3-5 seconds and it should update automatically

3. **Sign in to Google**
   - You must be logged in to Google to use Flow
   - Sign in and refresh the page

---

## 🔄 Automation Stops or Hangs

**Problem:** Automation stops working or gets stuck on one prompt.

**Solutions:**
1. **Check your internet connection**
   - Flow requires stable internet
   - Test by loading another website

2. **Flow page might be unresponsive**
   - Click **Stop** in the extension
   - Refresh the Flow page (`Ctrl+R` / `Cmd+R`)
   - Start automation again

3. **You hit the daily limit**
   - Flow has a daily video generation quota
   - Check the Logs tab for error messages
   - Try again tomorrow or after 24 hours

---

## 📝 Policy Error / Prompt Rejected

**Problem:** Seeing "Policy error detected" for some prompts.

**Why it happens:**
- Google Flow has content policies
- Some prompts may be flagged as inappropriate

**Solutions:**
1. **Check the failed prompt in Logs tab**
   - See exactly which prompt was rejected

2. **Revise your prompt**
   - Avoid: violence, adult content, copyrighted characters
   - Make it more general and descriptive

3. **Skip and continue**
   - The extension automatically skips rejected prompts
   - Your other prompts will continue processing

---

## 💾 Videos Not Downloading

**Problem:** Videos generate but don't download automatically.

**Solutions:**
1. **Check Chrome download settings**
   - Go to: `chrome://settings/downloads`
   - Make sure "Ask where to save each file" is OFF
   - Enable automatic downloads

2. **Check downloads folder**
   - Videos might be downloading but you missed the notification
   - Check your Chrome Downloads folder

3. **Pop-up blocked?**
   - Check if Chrome blocked download pop-ups
   - Click the blocked icon in address bar
   - Allow downloads for labs.google

---

## 🖼️ Image-to-Video Not Working

**Problem:** Images don't show up or prompts disappear after importing.

**Solutions:**
1. **Don't switch tabs while editing**
   - Stay on the Workspace tab
   - Complete your edits before switching

2. **Save before closing popup**
   - Click "Save and Close" button
   - Don't just close the popup window

3. **Image file size**
   - Keep images under 10MB each
   - Supported formats: JPG, PNG, WEBP

4. **Clear cache and retry**
   - Go to Settings tab
   - Click "Refresh Configuration"
   - Try importing images again

---

## ⏸️ Can't Resume After Pause

**Problem:** "Resume" button doesn't work after pausing.

**Solutions:**
1. **Refresh the Flow page**
   - Sometimes Flow state gets out of sync
   - Refresh: `Ctrl+R` / `Cmd+R`
   - You can use "Start from" setting to continue where you left off

2. **Use "Start from" instead**
   - Note which prompt you paused at
   - Set "Start from: [number]" in settings
   - Click "Start" to continue

---

## 🐌 Automation Running Slow

**Problem:** Automation is processing prompts very slowly.

**Why it happens:**
- Flow's AI takes time to generate videos
- Each video can take 1-3 minutes
- High server load can slow things down

**This is normal!**
- Video generation is a heavy process
- Be patient - quality takes time
- You can run it in the background and do other work

**Tips to optimize:**
- Run during off-peak hours (late night/early morning)
- Generate 1 video per prompt (instead of multiple variations)
- Use shorter, simpler prompts

---

## 🔍 Still Having Issues?

If your problem isn't listed here:

1. **Check the Logs tab**
   - Detailed error messages appear here
   - Copy the error message for support

2. **Contact Support**
   - 📱 Telegram: [Join our group](https://t.me/snapgens)
   - 💬 Zalo: [Chat with us](https://zalo.me/snapgens)
   - Include:
     - What you were trying to do
     - Error message from Logs
     - Screenshots (if applicable)

3. **Report a Bug**
   - GitHub: [Open an issue](https://github.com/SnapGen-Platform/snapgen-flow/issues)
   - Provide detailed steps to reproduce the problem

---

## ✅ Prevention Tips

Avoid common issues by:
- ✅ Always using the latest version of the extension
- ✅ Keeping Chrome browser updated
- ✅ Starting with small batches (3-5 prompts) to test
- ✅ Monitoring the Logs tab while automation runs
- ✅ Not closing the Flow page while automation is active

---

*Need more help? Check our [Getting Started Guide](./getting-started.md)*

*Made with ❤️ by [SnapGens.com](https://snapgens.com)*
