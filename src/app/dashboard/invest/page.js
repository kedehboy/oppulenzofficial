'use client'
import React, { useState } from 'react'
import DashboardLayout from '@/components/dashboard/dashboardLayout'
import Invest from '@/components/dashboard/invest/invest'

function Index() {
  return (
    <DashboardLayout>
      <Invest />
    </DashboardLayout>
  )
}

export default Index
