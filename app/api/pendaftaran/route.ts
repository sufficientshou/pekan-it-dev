import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nama, telepon, npm, angkatan, lomba } = body;

    // Validasi data
    if (!nama || !telepon || !npm || !angkatan || !lomba) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Data yang akan dikirim ke Google Sheets
    const timestamp = new Date().toLocaleString('id-ID');
    const rowData = [timestamp, nama, telepon, npm, angkatan, lomba, 'Pending'];

    // Kirim ke Google Sheets menggunakan Google Apps Script Web App
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json(
        { error: 'Google Script URL tidak dikonfigurasi' },
        { status: 500 }
      );
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: rowData
      }),
    });

    if (!response.ok) {
      throw new Error('Gagal mengirim data ke Google Sheets');
    }

    return NextResponse.json(
      { message: 'Data berhasil disimpan ke Google Sheets', timestamp },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json(
      { error: 'Gagal menyimpan data ke Google Sheets' },
      { status: 500 }
    );
  }
}